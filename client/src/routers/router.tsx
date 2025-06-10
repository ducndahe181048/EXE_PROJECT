import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import PrivateRoutes from '../components/privateRoutes';

const QuizLayout = lazy(() => import('../layouts/quizLayout'));

const router = createBrowserRouter([
  {
    Component: lazy(() => import('../layouts/mainLayout')),
    children: [
      {
        path: '/',
        Component: lazy(() => import('../app/page'))
      }
    ]
  },
  {
    path: '/auth',
    Component: lazy(() => import('../layouts/homePageLayout')),
    children: [
      {
        path: 'register',
        Component: lazy(() => import('../app/auth/register/page'))
      },
      {
        path: 'login',
        Component: lazy(() => import('../app/auth/login/page'))
      }
    ]
  },
  {
    path: '/quizzes',
    Component: () => (
      <PrivateRoutes>
        <Suspense fallback={<div>Loading layout...</div>}>
          <QuizLayout />
        </Suspense>
      </PrivateRoutes>
    ),
    children: [
      {
        path: '',
        Component: lazy(() => import('../app/quizzes/page'))
      }
    ]
  },
  {
    path: "/home",
    Component: lazy(() => import('../layouts/homePageLayout')),
    children: [
      {
        index: true,
        Component: lazy(() => import('../app/home/HomePage')),
      },
      {
        path: 'about',
        Component: lazy(() => import('../app/home/about/MainAboutUs'))
      },
      {
        path: 'available',
        Component: lazy(() => import('../app/home/available/AvailableBox'))
      },
      {
        path: 'contact',
        Component: lazy(() => import('../app/home/contact/ContactC'))
      },
      {
        path: 'design',
        Component: lazy(() => import('../app/home/drag_and_drop/mainDrag'))
      }
    ]
  }
]);

export default router;
