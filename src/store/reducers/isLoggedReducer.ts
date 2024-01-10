import { isLoginType } from "@store/typesActions/typesActions";

const INITIAL_STATE = {
  isLogged: false,
  data: "",
  message: "Vázio",
  // nesste exemplo o isLoading e o isError não são necessários, mas caso haja alguma requisição, coloqueos.
  isLoading: false,
  isError: false,
};
export function isLoggedReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case isLoginType.IS_LOGGER_REQ:
      return {
        ...state,
        isLoading: true,
        message: "Fazendo login, aguarde...",
      };

    case isLoginType.IS_LOGGER_TRUE:
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        message: "Usuário logado com sucesso!",
      };

    case isLoginType.IS_LOGGER_FALSE:
      return {
        ...state,
        isLogged: false,
        isLoading: false,
        message: "Você não está logado. Tente logar no sistema.",
      };
    default:
      return state;
  }
}
