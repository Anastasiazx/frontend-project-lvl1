#!/usr/bin/env node

import play from '../src/index.js';
import * as progress from '../games/arithmetic-progression.js';

play(progress.rules, progress.defineNumber);
