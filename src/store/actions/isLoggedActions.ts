import { isLoginType } from "@store/typesActions/typesActions";

export const isLoadReqAction = () => {
  return {
    type: isLoginType.IS_LOGGER_REQ,
  };
};

// no exepmlo abaixo não é necessário o payload, ele está aqui para exemplo
export const logginTrueAction = () => {
  return {
    type: isLoginType.IS_LOGGER_TRUE,
  };
};

export const logginFalseAction = () => {
  return {
    type: isLoginType.IS_LOGGER_FALSE,
  };
};
