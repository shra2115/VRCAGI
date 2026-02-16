import { translate } from './translate';

export const SETTINGS_KEY = 'VRCAGIUI_SETTINGS';
export const EXECUTIONS_KEY = 'VRCAGIUI_EXECUTIONS';
export const STATE_KEY = 'VRCAGIUI_STATE';
export const EXAMPLES_KEY = 'VRCAGIUI_EXAMPLES';

export const MODELS = [
  {
    id: 'gpt-4-1106-preview',
    name: 'OpenAI GPT-4 Turbo',
    icon: 'openai-logo.svg',
    badge: 'Preview',
  },
  {
    id: 'gpt-4',
    name: 'OpenAI GPT-4',
    icon: 'openai-logo.svg',
  },
  {
    id: 'gpt-3.5-turbo',
    name: 'OpenAI GPT-3.5 Turbo',
    icon: 'openai-logo.svg',
  },
];

export const ITERATIONS = [
  { id: '0', name: 'Infinity' },
  { id: '1', name: '1' },
  { id: '3', name: '3' },
  { id: '5', name: '5' },
  { id: '10', name: '10' },
  { id: '20', name: '20' },
  { id: '50', name: '50' },
];

export const VRCBEEAGI_ITERATIONS = [
  { id: '0', name: 'Until All tasks completed 🐝' }, //${translate('UNTIL_ALL_TASKS_COMPLETED', 'constants') this translation is not working
];

export const AGENT = [
  {
    id: 'vrcdeeragi',
    name: 'vrcDeerAGI',
    icon: '🦌',
    badge: 'STABLE',
  },
  {
    id: 'vrcelfagi',
    name: 'vrcElfAGI',
    icon: '🧝',
    badge: 'BETA',
  },
];

export const ALL_AGENTS = [
  {
    id: 'vrcelfagi',
    name: 'vrcElfAGI',
    icon: '🧝',
    badge: 'BETA',
  },
  {
    id: 'vrcdeeragi',
    name: 'vrcDeerAGI',
    icon: '🦌',
    message: '🤖/🔎+📄/🧑‍💻',
    badge: 'STABLE',
  },
  {
    id: 'vrccatagi',
    name: 'vrcCatAGI',
    icon: '🐱',
    message: '🤖/🔎+📄',
  },
  {
    id: 'vrcbeeagi',
    name: 'vrcBeeAGI',
    icon: '🐝',
    message: '🤖/🔎/📄',
  },
  { id: 'vrcagi', name: 'VrcAGI', icon: '👶', message: '🤖' },
];

export const THEME = [
  { id: 'system', name: 'SYSTEM', icon: '🖥️' },
  { id: 'light', name: 'LIGHT', icon: '🌞' },
  { id: 'dark', name: 'DARK', icon: '🌚' },
];

export const SPECIFIED_SKILLS = ['text_completion', 'web_search']; // for VrcDeerAGI
