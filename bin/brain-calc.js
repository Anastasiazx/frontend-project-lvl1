#!/usr/bin/env node

import play from '../src/index.js';
import * as calc from '../games/calculator.js';

play(calc.rules, calc.calculate);
