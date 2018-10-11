const thinky = require( 'thinky' )( {
    host: '192.168.33.10',
    db: 'api'
} );

const { type } = thinky;

const UserModel = thinky.createModel( 'User', {
    id: type.string(),
    password: type.string(),
    username: type.string(),
    fullName: type.string()
} );

const ResetModel = thinky.createModel( 'ResetToken', {
    id: type.string(),
    userGuid: type.string(),
} );

const BirdModel = thinky.createModel( 'Bird', {
    id: type.string(),
    name: type.string(),
    image: type.string(),
    createdAt: type.date().default(+new Date()),
    updateAt: type.date()
} );

UserModel.hasMany(ResetModel, "reset", "id", "userGuid");

export {
    UserModel,
    ResetModel
};
