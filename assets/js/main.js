// =============================================
// TASTY RECIPES — MAIN JAVASCRIPT
// =============================================

document.addEventListener("DOMContentLoaded", () => {

    // Mobile Navigation
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";
            });
        });
    }


    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll(
        ".recipe-card, .feature-card, .stat, .section-heading, .center-heading, .cta"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    // Header Shadow on Scroll
    const header = document.querySelector(".site-header");

    window.addEventListener("scroll", () => {
        if (!header) return;

        header.classList.toggle("scrolled", window.scrollY > 20);
    });

    // =============================================
// RECIPE SEARCH & FILTERING
// =============================================

const recipeSearch = document.getElementById("recipeSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const recipes = document.querySelectorAll(".searchable-recipe");
const noResults = document.getElementById("noResults");

let activeFilter = "all";

function filterRecipes() {

    if (!recipes.length) return;

    const searchTerm = recipeSearch
        ? recipeSearch.value.toLowerCase().trim()
        : "";

    let visibleRecipes = 0;

    recipes.forEach(recipe => {

        const recipeName =
            recipe.dataset.name.toLowerCase();

        const categories =
            recipe.dataset.category.toLowerCase();

        const matchesSearch =
            recipeName.includes(searchTerm);

        const matchesCategory =
            activeFilter === "all" ||
            categories.includes(activeFilter);

        const shouldShow =
            matchesSearch && matchesCategory;

        recipe.classList.toggle("hidden", !shouldShow);

        if (shouldShow) {
            visibleRecipes++;
        }
    });

    if (noResults) {
        noResults.classList.toggle(
            "show",
            visibleRecipes === 0
        );
    }
}


if (recipeSearch) {
    recipeSearch.addEventListener(
        "input",
        filterRecipes
    );
}


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        activeFilter = button.dataset.filter;

        filterRecipes();
    });

});

    // ========================================
// Recipes Navigation Dropdown
// ========================================

// ========================================
// Recipes Navigation Dropdown
// ========================================

const navDropdown = document.querySelector(".nav-dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownArrow = document.querySelector(".dropdown-arrow");

if (navDropdown && dropdownToggle && dropdownArrow) {

    // Arrow controls dropdown on mobile
    dropdownArrow.addEventListener("click", (event) => {
        if (window.innerWidth <= 900) {
            event.preventDefault();
            event.stopPropagation();

            navDropdown.classList.toggle("open");
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!navDropdown.contains(event.target)) {
            navDropdown.classList.remove("open");
        }
    });

    // Reset mobile state when returning to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            navDropdown.classList.remove("open");
        }
    });
}


// ========================================
// Category From URL
// ========================================

const categoryParams = new URLSearchParams(window.location.search);
const categoryFromURL = categoryParams.get("category");

if (categoryFromURL && typeof activeFilter !== "undefined") {

    activeFilter = categoryFromURL.toLowerCase();

    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach((button) => {
        button.classList.toggle(
            "active",
            button.dataset.filter === activeFilter
        );
    });

    filterRecipes();
}

});