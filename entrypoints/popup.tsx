import { defineEntrypoint } from '@wxt-dev/module-react';

export default defineEntrypoint({
  main() {
    return (
      <div style={{ padding: '16px', minWidth: '300px' }}>
        <h1>Green Lock</h1>
        <p>Welcome to your extension!</p>
      </div>
    );
  },
}); 