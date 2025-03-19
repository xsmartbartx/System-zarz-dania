export const getUserData = async (req, res)=>{
    try {
        const userId = req.auth.userId
        const User = await User.findById(userId)
    } catch (error){
        
    }
}