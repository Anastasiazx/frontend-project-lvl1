#!/usr/bin/env node

import play from '../src/index.js';
import * as progress from '../src/games/arithmetic-progression.js';

play(progress.rules, progress.defineNumber);
