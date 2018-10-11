import home from '../api/home'

exports.plugin = {

    register( server, options ) {

        home( server );

    },

    pkg: require( './package.json' )

};
