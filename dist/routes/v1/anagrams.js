import { Router } from 'express';
import processWordList, { ApiVersion } from '../../services/AnagramsService/index.js';
const router = Router();
router.get('/', (req, res) => {
    var _a;
    if (!((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.words)) {
        return res.status(200).json({ anagrams: [] });
    }
    const words = req.query.words;
    const anagrams = processWordList(words, ApiVersion.V1);
    return res.status(200).json({ anagrams });
});
export default router;
