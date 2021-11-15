#!/usr/bin/env node

import play from '../src/index.js';
import * as gcd from '../games/common-divisor.js';

play(gcd.rules, gcd.findDivisor);
