// server.ts
import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

const angularAppEngine = new AngularAppEngine();

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
    const context = getContext();

    // Podés definir endpoints si necesitás
    // const pathname = new URL(request.url).pathname;
    // if (pathname === '/api/hola') {
    //   return Response.json({ mensaje: '¡Hola desde el SSR!' });
    // }

    const result = await angularAppEngine.handle(request, context);
    return result || new Response('Not found', { status: 404 });
}

// Handler requerido por Angular CLI
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
