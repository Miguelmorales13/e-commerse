import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { getMessageGeneric } from "../configs/helpers.config";

@Injectable()
export class ResponseInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    return next.handle().pipe(
      map(async (data) => {
        const message = data?.message ?? getMessageGeneric(req.method);
        const dataFinal = data?.data ?? data ?? {};
        return {
          data: dataFinal,
          message
        };
      })
    );
  }

}
