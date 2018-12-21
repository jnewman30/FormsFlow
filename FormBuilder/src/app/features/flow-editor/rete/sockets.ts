import { Socket } from 'rete';

export const anySocket = new Socket('Any');

export const numSocket = new Socket('Number value');
numSocket.combineWith(anySocket);

export const jsonSocket = new Socket('JSON');
jsonSocket.combineWith(anySocket);

export const xmlSocket = new Socket('XML');
xmlSocket.combineWith(anySocket);
