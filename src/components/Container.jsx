import classNames from 'classnames';

/**
 * Method for rendering the Container
 *
 * @method Container
 * @param children - what will be the content of the container (router, etc)
 */
export default function Render({ children, className }) {
  return (
    <div className={classNames(className, 'container relative flex flex-col justify-start overflow-hidden md:flex-row md:justify-between')}>
      {children}
    </div>
  );
}
