import { Router, Request, Response } from 'express';
import processWordList, { ApiVersion } from '../../services/AnagramsService/index.js';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  if (!req?.query?.words) {
    return res.status(200).json({ anagrams: [] });
  }

  const words = req.query.words as string;

  const anagrams: Array<Array<string>> = processWordList(words, ApiVersion.V1);

  return res.status(200).json({ anagrams });
});

export default router;