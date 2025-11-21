/**
 * Broadcast Showcase Loader
 * Dynamically loads and renders broadcast items from JSON data
 */

(function () {
    'use strict';

    // Load broadcasts data and render
    async function loadBroadcasts() {
        try {
            const response = await fetch('data/broadcasts.json');
            const data = await response.json();
            renderBroadcasts(data.categories);
        } catch (error) {
            console.error('Error loading broadcasts:', error);
        }
    }

    // Render all broadcast categories
    function renderBroadcasts(categories) {
        Object.values(categories).forEach(category => {
            renderCategory(category);
        });
    }

    // Render a single category
    function renderCategory(category) {
        const paneId = `${category.id}-pane`;
        const pane = document.getElementById(paneId);

        if (!pane) {
            console.warn(`Pane not found: ${paneId}`);
            return;
        }

        // Find or create container
        let container = pane.querySelector('.horizontal-scroll-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'horizontal-scroll-container';
            pane.appendChild(container);
        }

        // Clear existing content
        container.innerHTML = '';

        // Render items
        category.items.forEach(item => {
            const itemElement = createBroadcastItem(item);
            container.appendChild(itemElement);
        });
    }

    // Create a single broadcast item element
    function createBroadcastItem(item) {
        const scrollItem = document.createElement('div');
        scrollItem.className = 'horizontal-scroll-item';

        const block = document.createElement('div');
        block.className = 'custom-block';

        const link = document.createElement('a');
        link.href = item.link;
        link.target = '_blank';

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;

        // Add fallback image if specified
        if (item.imageFallback) {
            img.onerror = function () {
                this.src = item.imageFallback;
            };
        }

        const info = document.createElement('div');
        info.className = 'custom-block-info';

        const title = document.createElement('h5');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        info.appendChild(title);
        info.appendChild(description);
        link.appendChild(img);
        link.appendChild(info);
        block.appendChild(link);
        scrollItem.appendChild(block);

        return scrollItem;
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadBroadcasts);
    } else {
        loadBroadcasts();
    }
})();
