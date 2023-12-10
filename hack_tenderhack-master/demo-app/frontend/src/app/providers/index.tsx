import compose from 'compose-function';

import { withRouter } from './withRouter';
import { withMantine } from './withMantine';
import { withReactQuery } from './withReactQuery';

export const withAppProviders = compose(withRouter, withMantine, withReactQuery);
