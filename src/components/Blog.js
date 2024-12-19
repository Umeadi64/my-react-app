import React from 'react';

function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <p>This is the Blog page.</p>
      <p>Here you can find our latest articles and news.</p>

      {/* Add blog posts here, you can use a list or cards */}
      <ul>
        <li>
          <h2>Blog Post 1</h2>
          <p>This is a sample blog post.</p>
        </li>
        <li>
          <h2>Blog Post 2</h2>
          <p>Another sample blog post.</p>
        </li>
      </ul>
    </div>
  );
}

export default Blog;