#!/usr/bin/env node

import play from '../src/index.js';
import * as divisor from '../src/games/common-divisor.js';

play(divisor.rules, divisor.findDivisor);
