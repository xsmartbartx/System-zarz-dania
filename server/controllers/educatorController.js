import { clerkClient } from '@clerk/express'

export const updateRoleToEducator = async ()=> {
    try {
        const userId = requestAnimationFrame.auth.userId

        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata:{
                role: 'educator',
            }
        })

        res.json({ success: true, message: 'Możesz kuż opublikować kurs' })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}