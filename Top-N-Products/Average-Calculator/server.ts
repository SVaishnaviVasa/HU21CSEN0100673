import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 9876;
const API_URL = 'http://20.244.56.144/test';

const numbersMap: { [key: string]: number[] } = {
  p: [],
  f: [],
  e: [],
  r: [],
};

const WINDOW_SIZE = 10;

const calculateAverage = (nums: number[]): number => {
  if (nums.length === 0) return 0;
  return nums.reduce((sum, num) => sum + num, 0) / nums.length;
};

app.get('/numbers/:type', async (req: Request, res: Response) => {
  const type = req.params.type;
  if (!['p', 'f', 'e', 'r'].includes(type)) {
    return res.status(400).json({ error: 'Invalid number type' });
  }

  try {
    const response = await axios.get(`${API_URL}/${type === 'p' ? 'primes' : type === 'f' ? 'fibo' : type === 'e' ? 'even' : 'rand'}`, { timeout: 500 });
    const numbers = response.data.numbers as number[];

    const currentNumbers = numbersMap[type];
    const newNumbers = [...new Set([...currentNumbers, ...numbers])].slice(-WINDOW_SIZE);

    const avg = calculateAverage(newNumbers);

    res.json({
      windowPrevState: currentNumbers,
      windowCurrState: newNumbers,
      numbers,
      avg: avg.toFixed(2),
    });

    numbersMap[type] = newNumbers;

  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching numbers:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
    res.status(500).json({ error: 'Failed to fetch numbers or process request' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
