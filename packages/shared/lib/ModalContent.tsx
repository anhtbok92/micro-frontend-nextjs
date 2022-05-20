import React, {Fragment, ReactNode} from "react";
import {Dialog, Transition} from '@headlessui/react';
import classNames from 'classnames';
import {XIcon} from '@heroicons/react/solid';

const MODAL_CLASSES: Record<ModalSize | 'base', string> = {
  base: 'modal-base',
  medium:
    'md:max-h-9/10 md:w-100 xs:w-full xs:max-h-full xs:h-full md:h-auto md:shadow md:rounded',
  full: 'h-full w-full',
  large: 'xs:w-full xs:h-full md:w-3/4 md:max-h-9/10 md:shadow md:rounded',
};

type ModalSize = 'full' | 'medium' | 'large' | 'base';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  title?: any;
  children: ReactNode;
  size?: ModalSize;
  hideCloseButton?: boolean;
  className?: string;
};

export const ModalContent: React.FC<Props> = ({
 isOpen,
 closeModal,
 title,
 children,
 size = 'medium',
 hideCloseButton,
 className,
}: Props) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-max" onClose={closeModal}>
        <div className="h-full w-full flex justify-center items-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <div
              className={classNames(
                MODAL_CLASSES.base,
                MODAL_CLASSES[size],
                className,
              )}>
              {!hideCloseButton && (
                <button
                  type="button"
                  className="group absolute top-4 left-4 p-2 z-30 rounded-full hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={closeModal}>
                  <XIcon className="text-gray-400 h-6 w-6 group-hover:text-gray-500" />
                </button>
              )}
              {title && (
                <Dialog.Title
                  as="h3"
                  className="text-lg text-center font-medium text-gray-900 py-6">
                  {title}
                </Dialog.Title>
              )}
              <div
                className={classNames('overflow-y-auto', {
                  'pb-10 px-10': size !== 'full',
                })}>
                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
};