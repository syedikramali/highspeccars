import { database, getMedia, storage } from "@/firebase";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, listAll, ref } from "firebase/storage";
import { find, includes, isEmpty, map, without } from "lodash";
import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useState } from "react";
import Grid from "./Grid";
import SortableItem from "./SortableItem";
import {
  Delete,
  DeleteOutline,
  Visibility,
  VisibilityOutlined,
} from "@mui/icons-material";
import Image from "next/image";

function MediaPool({ imgSeq, getData }) {
  const [items, setItems] = useState(imgSeq);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [contextMenu, setContextMenu] = useState(null);
  const [viewDialog, setViewDialog] = useState(false);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
            id: event.target.id,
          }
        : null
    );
  };
  const handleContextMenuClose = () => {
    setContextMenu(null);
  };

  const router = useRouter();

  useEffect(() => {
    setItems(imgSeq);
  }, [imgSeq]);

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;
    if (active.id !== over?.id && !isEmpty(over)) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        updateDoc(doc(database, "cars", router.query.carId), {
          media: arrayMove(items, oldIndex, newIndex),
        });
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }, []);

  const deleteImage = async () => {
    setDeleteLoading(true);
    await deleteObject(ref(storage, `${router.query.carId}/${deleteDialog}`));
    await updateDoc(doc(database, "cars", router.query.carId), {
      media: without(imgSeq, deleteDialog),
    });
    await getData();
    setDeleteDialog(false);
    setDeleteLoading(false);
  };

  if (isEmpty(items)) return null;

  return (
    <Fragment>
      <Box overflow={"hidden"}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={rectSortingStrategy}>
            <Grid columns={5}>
              {map(items, (id, index) => {
                return (
                  <SortableItem
                    key={id}
                    id={id}
                    index={index}
                    url={getMedia(router.query.carId, id)}
                    setDeleteDialog={setDeleteDialog}
                    onContextMenu={handleContextMenu}
                  />
                );
              })}
            </Grid>
          </SortableContext>
        </DndContext>
      </Box>

      <Menu
        open={contextMenu !== null}
        onClose={handleContextMenuClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem
          onClick={() => {
            setViewDialog(contextMenu.id);
            handleContextMenuClose();
          }}
        >
          <ListItemIcon>
            <VisibilityOutlined />
          </ListItemIcon>
          View
        </MenuItem>
        <MenuItem
          sx={{ color: "error.main" }}
          onClick={() => {
            setDeleteDialog(contextMenu.id);
            handleContextMenuClose();
          }}
          color="error.main"
        >
          <ListItemIcon>
            <DeleteOutline color="error" />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>

      <Dialog
        open={deleteDialog}
        onClose={() => (deleteLoading ? null : setDeleteDialog(false))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">Confirm to delete?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Caution! This action will delete the car data and its media
            permanently.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={deleteLoading}
            onClick={() => setDeleteDialog(false)}
            autoFocus
          >
            Cancel
          </Button>
          <Button onClick={deleteImage} disabled={deleteLoading}>
            {deleteLoading ? "Deleting" : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={viewDialog}
        onClose={() => setViewDialog(false)}
        fullScreen
      >
        <Image
          src={getMedia(router.query.carId, viewDialog)}
          alt={viewDialog}
          height="2000"
          width="2000"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
        ></Image>
      </Dialog>
    </Fragment>
  );
}

export default MediaPool;
