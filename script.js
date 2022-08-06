'use strict';

const images = [
    { 'id': '1', 'url': './img/naruto.jpg'},
    { 'id': '2', 'url': './img/sasuke.jpg'},
    { 'id': '3', 'url': './img/sakura.jpg'},
    { 'id': '4', 'url': './img/kakashi.webp'},
]

const containerItems = document.getElementById('items');

const loadImages = (images, container) =>
{
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    });
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');
const previous = () =>
{
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () =>
{
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

setInterval(() => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}, 2500);

document.getElementById('previous').addEventListener('click', previous);
document.getElementById('next').addEventListener('click', next);