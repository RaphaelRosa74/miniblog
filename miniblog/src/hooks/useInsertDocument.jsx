import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
//collection: para trabalhar com as "tabelas" ou seja collection do firebase
//addDoc: irá fazer o insert do documento no banco
//Timestamp: irá marcar o horario que o dado foi criado

const initialState = {
  loading: null,
  error: null,
};

const insertReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "INSERTED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userInsertDocument = (docColletion) => {
  //docColletion: programador quando ira inserir algo no sistema ele informar qual a coleções.

  const [response, dispatch] = useReducer(insertReducer, initialState);

  //deal with memory leak
  const [cancelled, setcancelled] = useState(false);

  const checkCancelledBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const insertDocument = async (document) => {
    checkCancelledBeforeDispatch({
      type: "LOADING",
    });
    try {
      const newDocument = { ...document, createdAt: Timestamp.now() };

      const InsertedDocument = await addDoc(
        collection(db, docColletion),
        newDocument
      );

      checkCancelledBeforeDispatch({
        type: "INSERTED_DOC",
        payload: InsertedDocument,
      });
    } catch (error) {
      checkCancelledBeforeDispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
  useEffect(() => {
    return () => setcancelled(true);
  }, []);

  return { insertDocument, response };
};
