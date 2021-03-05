import React from 'react';
import { useParams } from 'react-router-dom';

export default function ComponentPage() {
  const { purl } = useParams<ComponentInfoPageParams>();

  return (
    <main className="seo-demo-component-page-main">
      These are definitely the droids you are looking for

      <span className="seo-demo-special">
        ${purl}
      </span>

      <div>
        <div className="sed-demo-img-wrapper">
          <img src="/3507396093_4049dd7f9c_b.jpg" />

          <div className="seo-demo-legal-wrapper">
            <span className="seo-demo-legal-notice">
              "Hmmmm... Not the droid we're looking for" by DocChewbacca is licensed with CC BY-NC-SA 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/2.0/
            </span>
          </div>
        </div>

      </div>
    </main>
  );
}

export interface ComponentInfoPageParams {
  purl: string;
}