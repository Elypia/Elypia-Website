# Improvement
<!--
  This is for improvements for existing features which may
  be a small optimization of compliance related change, but
  doesn't add any significant functionality.

  This is pre-filled with example values, feel free to
  remove them before populating the template.
  
  If you feel a heading is irrelevant, just remove it.
-->

## Description
<!-- 
  Explain what this is about, try to use full sentences, and make your point clear.
-->
Currently, the root `html` tag in `index.html` has the `lang` attribute hard-coded to `en`
regardless of what the actual current language is.

This doesn't affect functionality, however it would be more correct to have the
document `lang` reflect the language that the document actually is.

## Motivation
This is more semantically correct, and can be good for SEO as it helps
search engines understand the language of the content for locale specific
results.
