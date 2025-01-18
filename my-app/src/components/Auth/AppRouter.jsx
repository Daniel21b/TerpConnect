import { Routes, Route } from 'react-router-dom';
import PasswordReset from './PasswordReset';

// In your routes configuration:
<Routes>
  {/* ... existing routes ... */}
  <Route path="/reset-password" element={<PasswordReset />} />
</Routes>