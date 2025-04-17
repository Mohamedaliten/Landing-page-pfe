module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    // Disable rule for unescaped entities
    "react/no-unescaped-entities": "off",
    // Disable rule for regular img elements
    "@next/next/no-img-element": "off"
  }
};
