import { useEffect } from 'react'

function SEO({ title, description, robots = "index, follow" }) {
  useEffect(() => {
    // Update Title
    if (title) {
      document.title = `${title} | Jamaluddin Jamali`;
    }

    // Update Description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }

    // Update Robots
    if (robots) {
      let metaRobots = document.querySelector('meta[name="robots"]');
      if (metaRobots) {
        metaRobots.setAttribute('content', robots);
      } else {
        metaRobots = document.createElement('meta');
        metaRobots.name = 'robots';
        metaRobots.content = robots;
        document.head.appendChild(metaRobots);
      }
    }
  }, [title, description, robots]);

  return null;
}

export default SEO;
