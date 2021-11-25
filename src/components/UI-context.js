import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { setModalKey, setScrollLocked, setScrollUnlocked } from "./UI-actions";
import { UIInitialState, UIReducer } from "./UI-reducer";
import { breakPoints } from "./UI-constants";

const UIContext = createContext({});

export const UIProvider = (props) => {
  const { children } = props;

  const [state, dispatch] = useReducer(UIReducer, UIInitialState);

  const setModal = useCallback(
    (key) => {
      setModalKey({ key }, state, dispatch);
    },
    [state]
  );

  const lockScroll = useCallback(() => {
    setScrollLocked(dispatch);
  }, []);

  const unlockScroll = useCallback(() => {
    setScrollUnlocked(dispatch);
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      breakPoints,
      setModal,
      lockScroll,
      unlockScroll,
    }),
    [state, setModal, lockScroll, unlockScroll]
  );

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (state.modalOpen || state.isScrollLocked) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }, [state.modalOpen, state.isScrollLocked]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI hook must be used inside UI Provider");
  }
  return context;
};
