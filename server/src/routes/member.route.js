const { Router } = require("express");

const router = Router();

const {getAllFacultyMembers,addFacultyMember,deleteFacultyMember,updateFacultyMember} = require('../controllers/member.controller')
//get members
router.get('/',getAllFacultyMembers)

//post members
router.post('/',addFacultyMember)

//delete members
router.delete('/:id',deleteFacultyMember)

//update members
router.patch('/:id',updateFacultyMember)



module.exports = router;