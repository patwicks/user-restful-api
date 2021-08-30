const router = require('express').Router();
const {
    GET_ALL_STORE,
    FIND_ONE_STORE,
    CREATE_NEW_STORE,
    LOGIN_STORE,
    UPDATE_STORE_DATA,
    VALIDATE_ACCOUNT,
    RESEND_OTP,
    FIND_USER_BY_EMAIL,
    RESET_PASSWORD,
    UPLOAD_PROFILE_STORE,
    UPLOAD_COVER_PHOTO
    } = require('../controller/controller.store')

const VERIFY = require('../middlewares/authMiddleware');
const HANDLE_UPLOAD = require('../utility/utility.uploadProfile');
const HANDLE_UPLOAD_COVER = require('../utility/utility.uploadCover');

//  
router.get('/', GET_ALL_STORE);
router.get('/:storeId', FIND_ONE_STORE);
router.put('/update/:storeId', UPDATE_STORE_DATA);
router.post('/register', CREATE_NEW_STORE);
router.post('/login', LOGIN_STORE);
router.post('/validate/:storeId', VALIDATE_ACCOUNT);
router.put('/resend/:storeId', RESEND_OTP);
router.put('/reset/:storeId', RESET_PASSWORD);
router.post('/forgot-password', FIND_USER_BY_EMAIL);
router.post('/upload', VERIFY, HANDLE_UPLOAD ,UPLOAD_PROFILE_STORE);
router.post('/upload/cover', VERIFY, HANDLE_UPLOAD_COVER ,UPLOAD_COVER_PHOTO);


module.exports = router;