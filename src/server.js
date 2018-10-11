import Hapi from 'hapi';
import jwt from 'hapi-auth-jwt2';
import routes from '../routes';
import vision from 'vision';
import Handlebars from 'handlebars';

const server = Hapi.Server( {

    port: 3345

} );

const initPlugins = async () => {

    try {
        await server.register( jwt );

        server.auth.strategy( 'jwt', 'jwt', {
            key: '327049d33aad076b1f9536bd6ba8dde5e3c625cb61fda5b2f391196c26038f23',
            validate: ( decoded, request ) => {
                return {
                    isValid: true
                }
            }
        } );
        
        await server.register( vision );
        server.views( {
            engines: {
                html: Handlebars
            },
            relativeTo: __dirname,
            path: '../static'
        } );

        await server.register( routes );
    } catch ( ex ) {
        console.error( `Exception while initializing the plugins: ${ ex.toString() }` );
        process.exit( -1 );
    }

}

const startServer = async () => {

    try {
        await initPlugins();
        await server.start();

        console.log( `Server started at: ${ server.info.uri }` );
    } catch ( ex ) {
        console.error( `Exception while starting the server: ${ ex.toString() }` );
        process.exit( -1 );
    }

}

startServer();
