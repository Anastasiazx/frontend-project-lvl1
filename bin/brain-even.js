#!/usr/bin/env node

import play from '../src/index.js';
import * as parity from '../games/parity-check.js';

play(parity.rules, parity.parityCheck);
