import React, { useRef, useState } from "react";
import "./news.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { BiPlusCircle } from "react-icons/bi";
import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
  TextField,
} from "@mui/material";
import { toast } from "react-toastify";

const newItemDefault = {
  title: "",
  poster: {},
  createDate: "",
  shortDescription: "",
};

const News = () => {
  const [newList, setNewList] = useState([
    {
      id: 1,
      title: "Hello world Hello world Hello world Hello world",
      createDate: "20/02/2022",
      poster:
        "https://www.primefaces.org/primereact-v7/showcase/images/primereact-logo-dark.png",
      shortDescription: "helele",
    },
    {
      id: 2,
      title: "Hello world",
      createDate: "20/02/2022",
      poster:
        "https://www.primefaces.org/primereact-v7/showcase/images/primereact-logo-dark.png",
      shortDescription: "helele",
    },
    {
      id: 3,
      title: "Hello world",
      createDate: "20/02/2022",
      poster:
        "https://www.primefaces.org/primereact-v7/showcase/images/primereact-logo-dark.png",
      shortDescription: "helele",
    },
    {
      id: 4,
      title: "Hello world",
      createDate: "20/02/2022",
      poster:
        "https://www.primefaces.org/primereact-v7/showcase/images/primereact-logo-dark.png",
      shortDescription:
        "helele asdkajs dkjlasjkld lkasjkd jask jkldajqwidjkas kldaiqjkld jasd kljasdjlk",
    },
    {
      id: 5,
      title: "Hello world",
      createDate: "20/02/2022",
      poster:
        "https://www.primefaces.org/primereact-v7/showcase/images/primereact-logo-dark.png",
      shortDescription:
        "helele asdkajs dkjlasjkld lkasjkd jask jkldajqwidjkas kldaiqjkld jasd kljasdjlk",
    },
    {
      id: 6,
      title: "Hello world",
      createDate: "20/02/2022",
      poster:
        "https://www.primefaces.org/primereact-v7/showcase/images/primereact-logo-dark.png",
      shortDescription:
        "helele asdkajs dkjlasjkld lkasjkd jask jkldajqwidjkas kldaiqjkld jasd kljasdjlk",
    },
    {
      id: 7,
      title: "Hello world",
      createDate: "20/02/2022",
      poster:
        "https://www.primefaces.org/primereact-v7/showcase/images/primereact-logo-dark.png",
      shortDescription:
        "helele asdkajs dkjlasjkld lkasjkd jask jkldajqwidjkas kldaiqjkld jasd kljasdjlk",
    },
    {
      id: 8,
      title: "Hello world",
      createDate: "20/02/2022",
      poster:
        "https://www.primefaces.org/primereact-v7/showcase/images/primereact-logo-dark.png",
      shortDescription:
        "helele asdkajs dkjlasjkld lkasjkd jask jkldajqwidjkas kldaiqjkld jasd kljasdjlk",
    },
  ]);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [openDialogView, setOpenDialogView] = useState(false);

  const [newItem, setNewItem] = useState(newItemDefault);
  const posterRef = useRef(null);
  const [typeDialog, setTypeDialog] = useState("add");

  const onChangeNewItem = (key, value) => {
    setNewItem({
      ...newItem,
      [key]: value,
    });
  };

  const handleClickOpenDialog = (news) => {
    setOpenDialogDelete(true);
    setNewItem(news);
  };

  const handleCloseDialog = () => {
    setOpenDialogDelete(false);
    setNewItem(newItemDefault);
  };

  const handleClickOpenDialogView = (type, news) => {
    setOpenDialogView(true);
    setNewItem(news);
    setTypeDialog(type);
  };

  const handleCloseDialogView = () => {
    setOpenDialogView(false);
    setNewItem(newItemDefault);
  };

  const handleOpenPoster = () => {
    posterRef.current.click();
  };

  const handleChangePoster = (e) => {
    if (e.target.files.length > 0) {
      let file = e.target.files[0];
      if (
        file.size < 10000 ||
        file.size > 5120000 ||
        !["image/png", "image/jpg", "image/jpeg"].find((x) => x == file.type)
      ) {
        onChangeNewItem("poster", "");
      } else {
        file.preview = URL.createObjectURL(file);
        onChangeNewItem("poster", file);
      }
    } else {
      onChangeNewItem("poster", "");
    }
  };

  const handleDeleteItem = (itemDelete) => {
    const listFilter = newList.filter((f) => f.id !== itemDelete.id);
    setNewList(listFilter);
    setOpenDialogDelete(false);

    toast(`Xóa thành công tin tức ${itemDelete.title}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "success",
    });
  };

  const handleAddItem = (itemAdd) => {
    setNewList([
      {
        ...itemAdd,
        poster: itemAdd?.poster?.preview,
      },
      ...newList,
    ]);
    setOpenDialogView(false);

    toast(`Thêm thành công tin tức ${itemAdd.title}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "success",
    });
  };

  const handleUpdateItem = (itemUpdate) => {
    toast(`Cập nhật thành công tin tức ${itemUpdate.title}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "success",
    });
    setOpenDialogView(false);
  };

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="h-full min-h-screen flex flex-col p-10 w-full">
      <div className="flex items-center justify-end mb-10">
        <Button
          variant="outlined"
          startIcon={<BiPlusCircle />}
          color="warning"
          style={{ fontWeight: "bold" }}
          onClick={() =>
            handleClickOpenDialogView("add", {
              ...newItemDefault,
              poster: {
                preview: "",
              },
            })
          }
        >
          Thêm tin tức
        </Button>
      </div>
      <DataTable
        value={newList}
        responsiveLayout="scroll"
        className="w-full"
        onRowClick={(e) => {
          handleClickOpenDialogView("view", {
            ...e.data,
            poster: {
              preview: e.data.poster,
            },
          });
        }}
      >
        <Column
          field="title"
          header="Tiêu đề"
          body={(data) => {
            return <p>{truncateString(data?.title, 30)}</p>;
          }}
        ></Column>
        <Column field="createDate" header="Ngày tạo"></Column>
        <Column
          field="poster"
          header="Poster"
          body={(data) => {
            return (
              <img
                src={data.poster}
                alt=""
                className="w-[200px] h-[80px] object-cover"
              />
            );
          }}
        ></Column>
        <Column
          field="shortDescription"
          header="Miêu tả"
          body={(data) => {
            return (
              <div className="flex flex-row gap-4 items-center">
                <span className="flex flex-2">
                  {truncateString(data?.shortDescription, 60)}
                </span>
                <div className="flex flex-1 flex-row gap-4 items-center justify-end">
                  <MdDeleteForever
                    id="button-delete"
                    size={30}
                    className="text-red-500"
                    onClick={() => handleClickOpenDialog(data)}
                  />
                  <FaEye
                    size={30}
                    className="text-blue-500"
                    onClick={() =>
                      handleClickOpenDialogView("view", {
                        ...data,
                        poster: {
                          preview: data.poster,
                        },
                      })
                    }
                  />
                </div>
              </div>
            );
          }}
        ></Column>
      </DataTable>

      {/* Dialog delete */}
      <Dialog
        open={openDialogDelete}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          style={{
            fontWeight: "bold",
          }}
        >{`Bạn có muốn xóa tin tức ${newItem?.title}?`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {newItem?.shortDescription}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} style={{ color: "gray" }}>
            Hủy
          </Button>
          <Button
            onClick={() => handleDeleteItem(newItem)}
            style={{ color: "red" }}
          >
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>

      {/* View or Add  */}
      <Dialog
        open={openDialogView}
        keepMounted
        onClose={handleCloseDialogView}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {typeDialog === "add" ? "Thêm tin tức" : "Chi tiết"}
        </DialogTitle>
        <div className="py-10 px-4 gap-4 flex flex-col w-[500px]">
          <TextField
            required
            id="outlined-required"
            label="Tiêu đề"
            value={newItem?.title}
            multiline
            onChange={(e) => onChangeNewItem("title", e.target.value)}
          />
          <TextField
            required
            value={newItem?.shortDescription}
            id="outlined-required"
            label="Miêu tả"
            multiline
            onChange={(e) =>
              onChangeNewItem("shortDescription", e.target.value)
            }
          />
          <div
            className="h-[200px] w-full flex hover:border-black border-[1px] cursor-pointer"
            onClick={() => handleOpenPoster()}
          >
            {newItem?.poster?.preview === "" ? (
              <div className="h-[200px] w-full items-center justify-center flex text-gray-500 gap-2">
                <BiPlusCircle size={30} />
                <p>Thêm Poster</p>
              </div>
            ) : (
              <img
                src={newItem?.poster?.preview}
                alt="poster"
                className="w-full h-full object-contain"
              />
            )}
          </div>
          <input
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            ref={posterRef}
            onChange={handleChangePoster}
            style={{ display: "none" }}
          />
        </div>
        <DialogActions>
          <Button onClick={handleCloseDialogView} style={{ color: "gray" }}>
            Hủy
          </Button>
          <Button
            onClick={() => {
              typeDialog === "add"
                ? handleAddItem(newItem)
                : handleUpdateItem(newItem);
            }}
            style={{ color: "red" }}
          >
            {typeDialog === "add" ? "Thêm" : "Cập nhật"}
          </Button>
        </DialogActions>
      </Dialog>
      {/*  */}
    </div>
  );
};

export default News;
