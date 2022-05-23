import controller from "../controllers/bandas-rock.js";
import auth from "../auth.js"

const nomeRota = 'bandas';

export default function (app,config) {
  const path = config.get("server.path_root") + nomeRota

  app
    .route(path).get(controller.get);

  app
    .route(path).post(auth.middlewareAuth,controller.post);

  app
    .route(path).put(auth.middlewareAuth, controller.put);

  app
    .route(path).delete(auth.middlewareAuth, controller.delete);

  console.log(`Rota [${nomeRota}] carregada...`);
};
