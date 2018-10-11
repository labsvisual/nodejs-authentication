import Controller from './controller.js';

export default ( server ) => {

    server.route( {

        method: 'POST',
        path: '/login',
        handler: Controller.handleLogin,

    } );

    server.route( {

        method: 'GET',
        path: '/bird',
        handler: Controller.handleRead,

    } );


    server.route( {

        method: 'GET',
        path: '/bird/{guid}',
        handler: Controller.handleReadOne,

    } );

    server.route( {

        method: 'POST',
        path: '/bird',
        handler: Controller.handleCreate,

    } );

    server.route( {

        method: 'PUT',
        path: '/bird/{guid}',
        handler: Controller.handleUpdate,

    } );

    server.route( {

        method: 'DELETE',
        path: '/bird/{guid}',
        handler: Controller.handleDelete,

    } );

};
