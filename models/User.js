module.exports = (sequelize, DataTypes)=> {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull: false
          }, 
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false
          }, 
          createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: "created_at"
          }, 
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: "updated_at"
          }         
    }, {
        tableName:"users",
        timestamps: true
    })
    return User
}