"use strict";
(() => {
    const fullName = (firstName, ...args) => {
        return `${firstName} ${args.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Ken');
    console.log(superman);
})();
//# sourceMappingURL=args-rest.js.map