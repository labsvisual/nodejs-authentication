import { UserModel, ResetModel, BirdModel } from '../../model';

const controller = {

    async handleLogin( request, h ) {

        return 'Login Works!';

    },

    async handleCreate( request, h ) {
        
        return 'Create Works!';

    },

    async handleRead( request, h ) {
    
        return 'Read Works!';

    },

    async handleUpdate( request, h ) {
    
        return 'Update Works!';

    },

    async handleDelete( request, h ) {
    
        return 'Delete Works!';

    },

    async handleReadOne( request, h ) {

        return 'Read One Works!';

    }

};

export default controller;
