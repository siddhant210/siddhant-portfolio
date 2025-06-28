import { useEffect } from 'react';

const ProjectAnalytics = ({ projectName, children }) => {
  useEffect(() => {
    const recordView = async () => {
      try {
        await fetch('http://localhost:8080/api/analytics/project-view', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `projectName=${encodeURIComponent(projectName)}`,
        });
      } catch (error) {
        console.error('Failed to record project view:', error);
      }
    };

    if (projectName) {
      recordView();
    }
  }, [projectName]);

  return children;
};

export default ProjectAnalytics;

