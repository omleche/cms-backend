const mongoose = requiere('mongoose');
const bcrypt = requiere('bcrypt');

const userSchema = new mongoose.Schema({
    name: {type: String },
    email: {type: String, required: true, unique:true},
    password: {type: String, required:true},
    role:{type: String, enum: ['admin','editor'], default: 'editor'},
}, { timestamps: true });

// Hash password before saving
userSchema.Schema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

// Compare password

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password);
};

module.exports = mongoose.model('User',userSchema);