import { createContext } from 'react';

const context = createContext({});
const { Provider: DestinationProvider, Consumer: DestinationConsumer } = context;

export { context, DestinationConsumer, DestinationProvider };