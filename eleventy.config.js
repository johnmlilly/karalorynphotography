import { DateTime } from "luxon";
import emojiReadTime from "@11tyrocks/eleventy-plugin-emoji-readtime";
import metagen from "eleventy-plugin-metagen";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/styles');
  eleventyConfig.addPassthroughCopy('./src/assets') ;
  eleventyConfig.addPassthroughCopy('./src/scripts');
  eleventyConfig.addPassthroughCopy('./src/admin');

  // Meta data plugin for SEO
  eleventyConfig.addPlugin(metagen);

  // Reading time for blog posts
  eleventyConfig.addPlugin(emojiReadTime, {
    emoji: "🕒",
    label: "minute read"
  });

	// Image optimization: https://www.11ty.dev/docs/plugins/image/#eleventy-transform
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// Output formats for each image.
		formats: ["avif", "webp", "auto"],

		// widths: ["auto"],

		failOnError: false,
		htmlOptions: {
			imgAttributes: {
				// e.g. <img loading decoding> assigned on the HTML tag will override these values.
				loading: "lazy",
				decoding: "async",
			}
		},

		sharpOptions: {
			animated: true,
		},
	});

// Get current year for footer
eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

// Format blog date into readable format
eleventyConfig.addFilter("postDate", (dateObj) => {
  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
});

// Output folders
    return {
      dir: {
        input: "src",    // Source directory for your content
        output: "public" // Directory where the built files will be output
      }
    };
}
  