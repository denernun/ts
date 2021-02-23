import { Router } from 'express';
import ProductRouter from './app/modules/produtos/router';

class Routes {
  static define(router: Router): Router {
    router.use('/produtos', ProductRouter);
    return router;
  }
}

export default Routes.define(Router());
