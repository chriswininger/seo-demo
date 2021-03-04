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
    </main>
  );
}

export interface ComponentInfoPageParams {
  purl: string;
}