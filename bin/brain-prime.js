#!/usr/bin/env node

import play from '../src/index.js';
import * as primeNum from '../games/prime-number.js';

play(primeNum.rules, primeNum.findPrimeNumber);